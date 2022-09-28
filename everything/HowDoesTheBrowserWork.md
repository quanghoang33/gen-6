- How does browser work
	 Navigation.
	 	DNS lookup: https://example.com -> IP adress
	 	Browser set up connection to sever via TCP handshake (SYN, SYN-ACK, ACK )
	 	TLS Negotiation (aka  Secure Sockets Layer (SSL) ): for secure, another handshake is required. 
	 	Response: once connection is entablished, sever responese data: HTML files or json...
	 Parsing.
	 	Browser recieves data and turns it into DOM (document object model),CSSOM and then render it to the screen. 
	 	Building the DOM tree which is html tag is a root. split data into tokens.
	 	When find non blocking resource like image, browser request to sever to get that resource and continue parsing. 
	 	Parsing can continue when a CSS file is encountered, but <script> tags—particularly those without an async or defer attribute—block rendering, and pause the parsing of HTML
	 	Preload Scanner:find html assets (js,css,images..) while main thread parsing html. 
	 	Building the CSSOM:
	 Render
	 	Combine CSSOM Tree and DOM Tree into Render TRee
	 	Style: Tags will no be displayed: head and head's children, nodes with display:none
	 	Layout: the process by determine: width,height,position of elements. 
	 	Paint: 