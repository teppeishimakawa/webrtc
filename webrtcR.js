


async function receive()
{

  const peerB = new RTCPeerConnection();

  await peerB.setRemoteDescription(peerA.localDescription);

  const answer = await peerB.createAnswer();

  await peerB.setLocalDescription(answer);

  console.log(peerB.remoteDescription);

  peer.addIceCandidate(new RTCIceCandidate(candidate));

}

receive();


peer.addEventListener('addstream', ev => {
  const stream = ev.stream;
}, false);


/*
peer.addEventListener('track', ev => {
  // const stream = ev.streams[0];
}, false);
*/