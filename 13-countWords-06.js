let words = ['apple', 'grape', 'apple', 'apple', 'cat'];
        function countWords(words){
            //This is the object that will be returned
            let result = {};

            for(let i = 0; i < words.length; i++){
                let word = words[i];

                if(!result[word]){
                    result[word] = 1;
                }else{
                    result[word]++;
                }
            }
            return result;
        }
        console.log(countWords(words));