document.addEventListener("DOMContentLoaded", function () {
  var app = document.querySelector(".intro-paragraph");

  if (app) {
    var typewriter = new Typewriter(app, {
      loop: true,
      delay: 75,
      deleteSpeed: 10,
    });

    typewriter
      .typeString(
        `
#include stdio.h
#include string.h
#include stdlib.h
#include sys/socket.h
#include arpa/inet.h
#include unistd.h

void send_packet(char *target_ip, char *payload) {
  int sock;
  struct sockaddr_in server;
  char buffer[4096];

  sock = socket(AF_INET, SOCK_STREAM, 0);
  server.sin_addr.s_addr = inet_addr(target_ip);
  server.sin_family = AF_INET;
  server.sin_port = htons(445);

  connect(sock, (struct sockaddr *)&server, sizeof(server));

  memset(buffer, 0x41, sizeof(buffer));
  memcpy(buffer, payload, strlen(payload));

  send(sock, buffer, sizeof(buffer), 0);
  close(sock);
}

char *generate_payload() {
  char *payload = (char *)malloc(128);
  memset(payload, 0x42, 128); 
  return payload;
}

int main() {
  char *target_ip = "192.168.1.100";
  char *payload = generate_payload();

  send_packet(target_ip, payload);

  free(payload);
  return 0;
}
 `
      )
      .pauseFor(1000)
      .start();
  } else {
    console.error("Element with class 'intro-paragraph' not found");
  }
});
