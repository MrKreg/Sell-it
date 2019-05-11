import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../environments/environment";
import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {RealtyService} from "./realty.service";
import {Realty} from "../models/realty/realty.model";

describe('Service: RealtyService', () => {
    let service: RealtyService, httpMock: HttpTestingController;
    const apiUrl = environment.apiUrl + "realty/default/";
    beforeEach(() => {
        TestBed.configureTestingModule({imports: [HttpClientTestingModule], providers: [RealtyService]});
        service = TestBed.get(RealtyService);
        httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        const service: RealtyService = TestBed.get(RealtyService);
        expect(service).toBeTruthy();
    });
    
    it('should get realty list',fakeAsync(()=>{
        const realtyMock:Realty[] = [
            {
                title:"Realty",
                description:"Description",
                price:2123,
                currency:"USD",
                offer:"Offer"
            },
            {
                title:"Realty 2",
                description:"Description 2",
                price:2111,
                currency:"USD",
                offer:"Offer"
            }
        ];

        let response:Realty[];
        service.getAll().subscribe(
            res => {
                expect(res).toEqual(realtyMock);
                expect(res.length).toBe(2);
            });

        const requestWrapper = httpMock.expectOne({url:apiUrl});
        requestWrapper.flush(realtyMock);

        tick();
        expect(requestWrapper.request.method).toEqual('GET');
        expect(requestWrapper.request.url).toEqual(apiUrl);
    }))
});