var RTE = require('./index.js');

var rte = new RTE('T5950','a5ca36b2a932ad8759f1b1930f495eed','$2a$10$.Mr2xpTDz5FrPp8sQxVsPud3KTJJvMCEm3tWmnVbWfSPEUnIrkwRe', 'http://localhost:3000');


// rte.Bank.getAllBanks(function(error, body){
// 	console.log(body);
// });

// rte.Bank.getAllBanks((error, body) => {
// 	console.log(body);
// })



// var user = {
// 	user_id: '8383748',
// 	username : "",
// 	email: 'james@mail.com',
// 	first_name: 'James',
// 	last_name: "Nikon",
// 	phone_number: '234814677368',
// 	bvn: '22133388729',
// }


// rte.User.create(user, function(error, body){
// 	console.log(body);
// });

// var options = {
// 	skip : 0,
// 	limit : 20,
// };

// rte.User.find(options, function(error, body){
// 	console.log(body);
// });

// var vars = {
// 	amount: '10.58', // Amount to debit
// 	type : 'debit', // Transaction Type
// 	user_id : '0098290', // User ID
// 	email : 'williamscalg@gmail.com' // Email of user, 
// };

// rte.Transaction.makeRecurentCardDebitTransaction(vars, function(error, body){
// 	console.log(body);
// });

// rte.Transaction.initiateDebitSecureCardTransaction(vars, function(error, body){
// 	console.log(body);
// });



// var options = {
// 	skip : 0,
// 	limit : 20,
// 	user_id : "0019288"
// };

// rte.Transaction.find(options, function(error, body){
// 	body.payload.transactions.forEach(function(x){
// 		console.log(x);
// 	})
// });

// rte.Transaction.findById(options, function(error, body){
// 	body.payload.transactions.forEach(function(x){
// 		console.log(x);
// 	})
// });

// 

// var bank_details = {
// 	bank_code: "063",
// 	account_number : '0072907170'
// }
// rte.Bank.resolveBankAccount(bank_details, (error, body) => {
// 	console.log(body);
// });