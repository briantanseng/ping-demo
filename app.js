var ping = require("ping");

//var hosts = ["8.8.8.8"];
var hosts = process.env.HOSTS.split(',');

console.log(`Pinging the hosts ${hosts}`);

exports.pingHosts = async () => {
  let summary = [];
  for (let host of hosts) {
    try {
      let res = await ping.promise.probe(host);
      console.log(res);
      if (res.alive) {
        console.log(`${res.host} is alive. Nothing to see here.`);
        
      } else {
        console.log(`RED ALERT! ${res.host} is down!`);
      }
      summary.push({ 'host': res.host, 'alive': res.alive });
    } catch (error) {
      console.log(error);
    }
  }
  console.log(summary);
  return summary;
};



