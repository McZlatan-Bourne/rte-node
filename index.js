var base     = require('./lib/rte.library');
var bank     = require('./lib/rte.bank');
var transaction     = require('./lib/rte.transaction');
var user     = require('./lib/rte.user');


var RTE = function (tenant_id, tenant_key, tenant_token, base_url_or_production_flag)
{

	var RTEbase      = new base(tenant_id, tenant_key, tenant_token, base_url_or_production_flag);
	this.Bank        = new bank(RTEbase);
	this.Transaction  = new transaction(RTEbase);
	this.User  = new user(RTEbase);

} 


module.exports = RTE;