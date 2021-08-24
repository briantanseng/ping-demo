# ping-demo
Node wrapper for pinging servers packaged as an AWS lambda function

## Run the app
```
$ npm install
$ export HOSTS=8.8.8.8,8.8.8.0
$ ./run.sh
```

## Sample Run
```
$ ./run.sh

Pinging the hosts 8.8.8.8,8.8.8.0
{
  inputHost: '8.8.8.8',
  host: '8.8.8.8',
  alive: true,
  output: 'PING 8.8.8.8 (8.8.8.8): 56 data bytes\n' +
    '64 bytes from 8.8.8.8: icmp_seq=0 ttl=115 time=33.014 ms\n' +
    '\n' +
    '--- 8.8.8.8 ping statistics ---\n' +
    '1 packets transmitted, 1 packets received, 0.0% packet loss\n' +
    'round-trip min/avg/max/stddev = 33.014/33.014/33.014/0.000 ms\n',
  time: 33.014,
  times: [ 33.014 ],
  min: '33.014',
  max: '33.014',
  avg: '33.014',
  stddev: '0.000',
  packetLoss: '0.000',
  numeric_host: '8.8.8.8'
}
8.8.8.8 is alive. Nothing to see here.
{
  inputHost: '8.8.8.0',
  host: '8.8.8.0',
  alive: false,
  output: 'PING 8.8.8.0 (8.8.8.0): 56 data bytes\n' +
    '\n' +
    '--- 8.8.8.0 ping statistics ---\n' +
    '1 packets transmitted, 0 packets received, 100.0% packet loss\n',
  time: 'unknown',
  times: [],
  min: 'unknown',
  max: 'unknown',
  avg: 'unknown',
  stddev: 'unknown',
  packetLoss: '100.000',
  numeric_host: '8.8.8.0'
}
RED ALERT! 8.8.8.0 is down!
[ { host: '8.8.8.8', alive: true }, { host: '8.8.8.0', alive: false } ]
```
