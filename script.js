* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.gameOverModal {
  display: none;
  line-height: 290%;
  text-align: justify;
  position: relative;
  overflow-y: auto;

  max-height: 800px;
  top: -20%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 100%;
  max-width: 45%;
  height: 40%;
  padding: 1.5em;
  border: 2px solid black;

  background-image: -webkit-linear-gradient(bottom, #f4e2c9 20%, #f4d7c9 100%);
  background-image: -ms-linear-gradient(bottom, #f4e2c9 20%, #f4d7c9 100%);
  background-image: linear-gradient(to bottom, #f4e2c9 20%, #f4d7c9 100%);
}

.closebtn {
  font-size: 30px;
  padding: 0.2em 0.4em 0.2em 0.4em;
  float: right;
  font-family: arial;
  background-color: #f90b6d;
  color: white;
  cursor: pointer;
  opacity: 0.6;
  transition: 0.3s;
}
.closebtn:hover {
  opacity: 1;
}

.viewer {
  list-style-type: none;
  flex: auto;
  width: 249px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-size: 1.05em;

  font-family: sans-serif;
  background-color: lightgrey;
  border: 2px inset;

  margin-left: auto;
  margin-right: auto;
  text-align: center;
  cursor: pointer;
}

.span {
  float: left;
  display: inline;
}

.span a {
  display: block;
  color: black;
  text-align: center;
  padding: 13px;
  text-decoration: none;
}

.span a:hover {
  background-color: #f90b6d;
}
