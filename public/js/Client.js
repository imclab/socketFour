function Client(ip, type) {
    this.type = type || "spectator";
    this.ip = ip;
    this.turn = false;
};
