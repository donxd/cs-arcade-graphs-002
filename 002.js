function roadsBuilding(cities, roads) {
    let result = [];
    
    roads = roads.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        if (b[0] > a[0]) return -1;
        
        if (a[1] > b[1]) return 1;
        if (b[1] > a[1]) return -1;
        
        return 0;
    });
    
    for (let i = 0; i < cities; i++) {
        for (let j = 0; j < cities; j++) {
            if ( i !== j ) {
                let finded = false;

                // if ( roads.length ) {
                    for (let n = 0; n < roads.length; n++) {
                        if (i === roads[n][0] && j === roads[n][1] || 
                           j === roads[n][0] && i === roads[n][1] ) {
                            // roads.shift();
                            finded = true;
                            break;
                        }
                    }
                    
                // }
                
                if (!finded) {
                    let stored = false;
                    for (let m = 0; m < result.length; m++) {
                        if (i === result[m][0] && j === result[m][1] || 
                           j === result[m][0] && i === result[m][1] ) {
                            // roads.shift();
                            stored = true;
                            break;
                        }
                    }
                    
                    if (!stored) {
                        result.push([i, j]);   
                    }
                }
            }
        }
    }
    
    return result;
}
