const files = ["Cucumber", "Potato", "Tomato", "Eggplant", "Cabbage"];
const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(files);
    }, 3000);
});

const getData = async(promise) => {
    try {
        const data = await promise;
        data.forEach((item, index) => {
            const Vegetables = index + ":"  + item;
           console.log(Vegetables); 
        });
    } catch(error) {
       console.log(error);
    }
};
getData(myPromise);