var SAAgent = null;
var SASocket = null;
var CHANNELID = 104;
var ProviderAppName = "HelloAccessoryProvider";


//디버깅용 text
function createHTML(log_string)
{
 alert("log_string"+log_string);
console.log(log_string)
 var log = document.getElementById('resultBoard');
 log.innerHTML = log.innerHTML + "<br> : " + log_string;

 
}

 

function onerror(err) {
 console.log("err [" + err.name + "] msg[" + err.message + "]");
}


//연결되면 소켓을 참조한후 만약 소켓의 상태가 안좋으면 자동으로 끊어줌
var agentCallback = {
 onconnect : function(socket) {
  SASocket = socket;
  alert("HelloAccessory Connection established with RemotePeer");
  createHTML("startConnection");
  SASocket.setSocketStatusListener(function(reason){
   console.log("Service connection lost, Reason : [" + reason + "]");
   disconnect();
  });
 },
 onerror : onerror
};


//연결이벤트 콜백함수로서 해당앱을 찾아주고 연결시켜준다 
var peerAgentFindCallback = {
 onpeeragentfound : function(peerAgent) {
  try {
   //호스트의 앱네임이 맞으면 호스트와 연결시켜줌 
   if (peerAgent.appName == ProviderAppName) {
    SAAgent.setServiceConnectionListener(agentCallback);
    SAAgent.requestServiceConnection(peerAgent);
   } else {
    alert("Not expected app!! : " + peerAgent.appName);
   }
  } catch(err) {
   console.log("exception [" + err.name + "] msg[" + err.message + "]");
  }
 },
 onerror : onerror
}


//연결상태를 이벤트주고 
//호스트에서 찾아본다 
function onsuccess(agents) {
 try {
  if (agents.length > 0) {
   SAAgent = agents[0];
   
   SAAgent.setPeerAgentFindListener(peerAgentFindCallback);
   SAAgent.findPeerAgents();
  } else {
   alert("Not found SAAgent!!");
  }
 } catch(err) {
  console.log("exception [" + err.name + "] msg[" + err.message + "]");
 }
}


//호스트와 연결 시켜줌 만약 연결되있으면 빠져나옴 
connect()
function connect() {
	console.log('connect')
 if (SASocket) {
  alert('Already connected!');
        return false;
    }
 try {
  webapis.sa.requestSAAgent(onsuccess, onerror);
 } catch(err) {
  console.log("exception [" + err.name + "] msg[" + err.message + "]");
 }
}


//연결을 끊어주고 소켓 초기화 
function disconnect() {
	console.log('disconnect')
 try {
  if (SASocket != null) {
   SASocket.close();
   SASocket = null;
   createHTML("closeConnection");
  }
 } catch(err) {
  console.log("exception [" + err.name + "] msg[" + err.message + "]");
 }
}


//호스트에서 데이터를 받을경우 디버깅
function onreceive(channelId, data) {
 createHTML(data);
 
}


//기어에서 리시브 이벤트를 설정해 데이터가 기어로 올라올경우 디버그해준다 
//호스트로 채널 아이디와 인자를 보낸다 
function fetch() {
	console.log('fetch')
	
 try {
  SASocket.setDataReceiveListener(onreceive);
  SASocket.sendData(CHANNELID, "Hello Accessory!");
 } catch(err) {
  console.log("exception [" + err.name + "] msg[" + err.message + "]");
 }
}

 
