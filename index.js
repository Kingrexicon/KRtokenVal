const api_key = 'f9f7a94816d8a2cfe57109110b2d7b59';

document.querySelector("button").addEventListener("click", giveResult);
let currentDate = new Date().toJSON().slice(0, 10);
document.querySelector("input").value = currentDate; 

function giveResult() {
	let daste = document.querySelector("#date").value;
	let token = document.querySelector("#text").value;
	let currency = document.querySelector("#currency").value;
	
	 
	// with this i will be inputing the date at which i want the APOD of the day to display.

	
		fetch(
			`https://api.coinlayer.com/api/${daste}?access_key=${api_key}&target=${currency}&symbols=${token} `
		)
			.then((res) => res.json()) // parse response as JSON
			.then((data) => {
			
				let val  = Object.values(data.rates)
				if(token==="" || currency ===""){
					console.log(`error ${err}`)
				}else{
					console.log(`On ${daste},1 ${token} = ${val} ${currency}`);
				document.querySelector("#return").innerHTML= `On ${daste},1 ${token} = ${val} ${currency.toUpperCase()}`
				}
			})
			.catch((err) => {
				console.log(`error ${err}`);
			});
	
		}