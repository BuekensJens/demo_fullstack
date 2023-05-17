const lanIP = `${window.location.hostname}:5000`;
const socketio = io(lanIP);

const clearClassList = function (el) {
  el.classList.remove('c-room--wait');
  el.classList.remove('c-room--on');
};

const listenToUI = function () {
  const knoppen = document.querySelectorAll('.js-power-btn');
  for (const knop of knoppen) {
    knop.addEventListener('click', function () {
      const id = this.dataset.idlamp;
      let nieuweStatus;
      if (this.dataset.statuslamp == 0) {
        nieuweStatus = 1;
      } else {
        nieuweStatus = 0;
      }
      //const statusOmgekeerd = !status;
      clearClassList(document.querySelector(`.js-room[data-idlamp="${id}"]`));
      document.querySelector(`.js-room[data-idlamp="${id}"]`).classList.add('c-room--wait');
      socketio.emit('F2B_switch_light', { lamp_id: id, new_status: nieuweStatus });
    });
  }
};

const listenToSocket = function () {
  socketio.on('connect', function () {
    console.log('verbonden met socket webserver');
  });

  //in stap 2
  socketio.on('B2F_alles_uit', function (json) {
    console.log('alle lampen zijn automatisch uitgezet');
  });

  socketio.on('B2F_status_lampen', function (jsonObject) {
    console.log('Dit is de status van de lampen');
    console.log(jsonObject);
    for (const lamp of jsonObject.lampen) {
      const room = document.querySelector(`.js-room[data-idlamp="${lamp.id}"]`);
      if (room) {
        const knop = room.querySelector('.js-power-btn');
        knop.dataset.statuslamp = lamp.status;
        clearClassList(room);
        if (lamp.status == 1) {
          room.classList.add('c-room--on');
        }
      }
    }
  });

  socketio.on('B2F_verandering_lamp', function (jsonObject) {
    console.log('Er is een status van een lamp veranderd');
    console.log(jsonObject.lamp.id);
    console.log(jsonObject.lamp.status);

    const room = document.querySelector(`.js-room[data-idlamp="${jsonObject.lamp.id}"]`);
    if (room) {
      const knop = room.querySelector('.js-power-btn'); //spreek de room, als start. Zodat je enkel knop krijgt die in de room staat
      knop.dataset.statuslamp = jsonObject.lamp.status;

      clearClassList(room);
      if (jsonObject.lamp.status == 1) {
        room.classList.add('c-room--on');
      }
    }
  });
};

const init = function () {
  console.info('DOM geladen');
  listenToUI();
  listenToSocket();
};

document.addEventListener('DOMContentLoaded', init);
