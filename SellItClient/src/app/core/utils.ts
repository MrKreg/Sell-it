export  class Utils {
     public static toCamelCase: any = (obj: any) => {
         let rtn = obj;
         if (typeof obj === 'object') {
             if (obj instanceof Array) {
                 rtn = obj.map(Utils.toCamelCase)
             }
             else if (Utils.isEmpty(obj)) {
                 rtn = null
             } else {
                 rtn = {};
                 for (let key in obj) {
                     if (obj.hasOwnProperty(key)) {
                         const newKey = key.replace(/(_\w)/g, k => k[1].toUpperCase())
                         rtn[newKey] = Utils.toCamelCase(obj[key])
                     }
                 }
             }
         }
         return rtn
     };

    public static toSnakeCase(obj){
        if (typeof(obj) != "object") return obj;

        for(let oldName in obj){

            // Camel to underscore
            let newName = oldName.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});

            // Only process if names are different
            if (newName != oldName) {
                // Check for the old property name to avoid a ReferenceError in strict mode.
                if (obj.hasOwnProperty(oldName)) {
                    obj[newName] = obj[oldName];
                    delete obj[oldName];
                }
            }

            // Recursion
            if (typeof(obj[newName]) == "object") {
                obj[newName] = Utils.toSnakeCase(obj[newName]);
            }

        }
        return obj;
    }
     
     private static isEmpty = obj => [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
    
}