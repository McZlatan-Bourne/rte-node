
/**
* RTE IP class
*
* @class RTEIP
* @constructor
*/ 

var RTEBANK = function (RTEBase) {

	/**
	* Retrieves a list of Banks
	*
	* @method resolveBankAccount 
	* @param {Function} callback
	* 
	*/ 
	this.resolveBankAccount = function (postBody, callback) { 

		var requestParams      = {};
		requestParams.data     = { bank_code: postBody.bank_code, account_number: postBody.account_number };
		requestParams.method   = 'POST'; 
		return RTEBase.makeRequest('tenant/resolve_bank_account',  requestParams, callback);

	},
	
	this.getAllBanks = function (callback) { 

		var requestParams      = {};
		requestParams.data     = {};
		requestParams.method   = 'GET'; 
		return RTEBase.makeRequest('tools/get_all_banks',  requestParams, callback);

	} 
 

}


module.exports = RTEBANK