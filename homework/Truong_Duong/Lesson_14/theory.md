# 4. What happens during TLS handshake ?


![TLS handshake](https://ssl.vn/wp-content/uploads/2018/09/ssl-tls-handshake-process-1024x670.png.webp)

- Using a __asymmetric encryption__ to setup TLS handshake
- Client sends `Client Hello` message to Server which include:
  - TLS version
  - Cipher suites client supports (algorithm)
  - Client random bytes

- Server sends `Server Hello` message to Client which include:
  - Server's SSL certificate
  - Server's chosen cipher suites
  - Server random bytes

- Client confirms Server's identity (authentication) by checking the server's SSL certificate using RSA encryption:
  - __*SSL certificate*__ contains:
    - __domain name__
    - __CA's digital signature__
    - __server's public key__
    - Other informations like: person/ organization owns the certificate, which Certificate authority (CA) issued it, issue date, expiration date, ...
  - The whole identity authentication is based on the idea `You trust the CA, and they trust me, therefore you can trust me.`:
    - The browser or OS has a build-in list of all CA's public key
    - It uses CA's Public Key to decrypt the CA's digital signature
    - It confirms that the decrypted data is matched.
      - Public key of server is included in the decrypted signature => check if it matches the public key in certificate.

- Key Exchange, use RSA
  - Client generates a random `pre-master secret`, encrypts it with the Server's public key (found in Server SSL's certificate), sends the result to Server
  - Server decrypts the `pre-master secret` using its secret key.
  - At this point, both Client and Server share the same `pre-master secret`. 

- Both Client and Server generate `Session key` or `Master Key` from `pre-master secret`, `client random`, and `server random`

  - `session_key = hash(pre-master secret, ClientHello.random, ServerHello.random)`
  - use client, server random to avoid replay attack: if there is no client random and server random, hacker capture the package and resend.

- Client is ready: The client sends a `finished` message that is encrypted with a `session key`.

- Server is ready: The server sends a `finished` message encrypted with a `session key`.

- The handshake is completed, and communication continues using the __symmetric encryption__ with key = Session key, since it is much faster.

# 5. How does an XSS attack work?

Cross site scripting (XSS) is an attack in which an attacker injects malicious executable scripts into the code of a trusted application or website. Attackers often initiate an XSS attack by sending a malicious link to a user and enticing the user to click it. If the app or website lacks proper data sanitization, the malicious link executes the attacker’s chosen code on the user’s system. As a result, the attacker can steal the user’s active session cookie.

Strategies to prevent XSS attacks include these:

- Never trust user input.
- Implement output encoding.
- Perform user input validation.

# How does a CSRF attack work? How to prevent it?

# What happens during a TCP handshake?

- Step 1: In the first step, the client establishes a connection with a server. It sends a segment with SYN and informs the server about the client should start communication, and with what should be its sequence number.
- Step 2: In this step server responds to the client request with SYN-ACK signal set. ACK helps you to signify the response of segment that is received and SYN signifies what sequence number it should able to start with the segments.
- Step 3: In this final step, the client acknowledges the response of the Server, and they both create a stable connection will begin the actual data transfer process.

## Why 3-way handshake instead of 2-way handshake?

For server: three-way handshake is needed since the server needs to know the message it sends back to client (second message) is successful. The third message from client proves that the server's message (second message) is successful so the third message is needed.

## What is purpose of 2 "random" sequence numbers