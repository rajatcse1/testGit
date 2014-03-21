var data = {"results": [
  {
    layerId: 5,
    layerName: "Pharmaceutical Entities",
    attributes: {
      OBJECTID: "35",
      FACILITYTYPE: "Pharmacy",
      FACILITYSUBTYPE: "24 Hr Pharmacy",
      COMMERCIALNAME_E: "SADD MAARAB PHARMACY"
      },
    geometryType: "esriGeometryPoint"
   },
  {
    layerId: 5,
    layerName: "Pharmaceutical Entities",
    attributes: {
      OBJECTID: "1",
      FACILITYTYPE: "Pharmacy",
      FACILITYSUBTYPE: "24 Hr Pharmacy",
      COMMERCIALNAME_E: "GAYATHY HOSPITAL  PHAMACY"
    },
    geometryType: "esriGeometryPoint"
  },
     {
    layerId: 5,
    layerName: "Pharmaceutical Entities",
    attributes: {
      OBJECTID: "255",
      FACILITYTYPE: "Pharmacy",
      FACILITYSUBTYPE: "24 Hr Pharmacy",
      COMMERCIALNAME_E: "AL DEWAN PHARMACY"
      },
    geometryType: "esriGeometryPoint"
   }
]};

function sortJsonArrayByProperty(objArray, prop, direction){
    if (arguments.length<2) throw new Error("sortJsonArrayByProp requires 2 arguments");
    var direct = arguments.length>2 ? arguments[2] : 1; //Default to ascending

    if (objArray && objArray.constructor===Array){
        var propPath = (prop.constructor===Array) ? prop : prop.split(".");
        objArray.sort(function(a,b){
            for (var p in propPath){
                if (a[propPath[p]] && b[propPath[p]]){
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            // convert numeric strings to integers
            a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;
            return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
        });
    }
}

sortJsonArrayByProperty(data.results, 'attributes.COMMERCIALNAME_E');
//sortJsonArrayByProperty(results, 'attributes.OBJECTID', -1);
console.log(data);
