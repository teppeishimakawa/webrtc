
//SDA
//ICE（Interactive Connectivity Establishment）のCandidate
//の二つをお互い知る必要がある

var video=document.getElementById("video");

// STUNを使う
const peerA = new RTCPeerConnection({
  iceServers: [
    { urls: 'stun:stun.skyway.io:3478' },
  ],
});



const medias =
{
  video: true,
  audio: false,
};

/*
stream.getTracks(); // MSTぜんぶ
stream.getAudioTracks(); // audioのMSTだけ
stream.getVideoTracks(); // videoのMSTだけ
*/

const promise = navigator.mediaDevices.getUserMedia(medias);
promise.then(successCallback)
       .catch(errorCallback);

async function successCallback(stream)
 {
  video.srcObject = stream;
  peerA.addStream(stream);

  var offer= await peerA.createOffer();
  await peerA.setLocalDescription(offer);

  console.log(peerA.localDescription);
 }


function errorCallback(err)
 {
  alert(err);
 }


video.play();


peerA.addEventListener('icecandidate', ev =>
{
  if (ev.candidate) {
    // 経路の候補が見つかったとき
  }
  // 全ての経路を見つけ尽くしたとき
});



