var ClientPacket = require("./ClientPacket.js");

function NewCharacter(buffer) {
	this._packet = new ClientPacket(buffer);
	this._packet.readC();
}

module.exports = NewCharacter;