// Meteor.methods({
//     createTransaction: function(doc) {
//         var options1, options2, phone_number, ref, res;
//         // phone_number = (ref = Payees.findOne(doc.payee)) != null ? ref.phone_number: void 0;
//         options1={
//             vendor: 511503,
//             amount: doc.amount,
//             phone: phone_number;
//         };
//         this.unblock();
//         return Meteor.defer(function(){
//             var e, result;
//             try {
//                 result = HTTP.call('POST','http://testpay.vodafonecash.com.gh/SendSMS.php',{
//                     params: options1;
//                 });
//                 console.log(result);
//             } catch (error){
//                 e = error;
//                 console.log(e)
//             }
//         })
//     }
// })

Meteor.methods({
	'getTokenMessage': function(){
		this.unblock();
		response = HTTP.call("POSt",'http://testpay.vodafonecash.com.gh/SendSMS.php', {
			params: {
				vendor: '511503',
				amount: '300',
				phone: '0243364451'
			}
		});
		return response;
	}
})

