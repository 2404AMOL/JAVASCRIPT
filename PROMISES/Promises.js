//! =============================================== PROMISES =============================================
//todo: Javascript is by default is Synchronous
//* Promises is used to handle the Asynchronous Condition  

//* There are Three types of Promises 
//* 1.Successful/Fulfilled/Resolved
//* 2.Rejected
//* 3.Pending 
//* 4.Settled 

//? Syntax:            let promise1=new Promise((resolve, reject)=>{ 
//?                        setTimeout(()=>{             
//?                                 let prom1="I Promise You I Never Leave You"
//?                                 resolve(prom1);
//?                                 reject(`ABBU NAHI MANENGE");
//?                             },7000)
//?                 });
//?                 
//?                 
//?                 promise1.then((prom1)=>{`             
//?                             console.log(~Dekho Main Kaha tha ${prom1.} aur gher vale man gaye!!`)     
//?                     }).catch((err)=>{
//?                             console.log(error)
//?                        });
