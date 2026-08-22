class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
        groupAnagrams(strs) {
        let groupedPairs = [];
        
        // loop over each elem of strs
        for(let i = 0; i < strs.length; i++) {
            let foundGroup = false;
            
            // initial group creation
            if(i === 0) {
                groupedPairs.push([strs[i]]);
                continue;
            }
            
             // loop over those groups, to identify whether to add the value or to create new group
            for(let j = 0; j < groupedPairs.length; j++) {
                
                const elem1 = strs[i].split('').sort().join();
                // holds the first elem in a group
                const elem2 = groupedPairs[j][0].split('').sort().join();
                
                if(elem1 === elem2) {
                    foundGroup = true;
                    // [j] holds the current group where we adds want to add
                    groupedPairs[j].push(strs[i]);
                } 
            }
            
            if(!foundGroup) {
                 groupedPairs.push([strs[i]]);
            }
        }
    
        
        console.log(groupedPairs);
        
        return groupedPairs ?? false;
    }
}
