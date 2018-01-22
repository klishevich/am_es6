var f = function(data) {
  return data;
}

const f2 = (data) => {
  return data;
}

// Abount this ???
var _this = this;
$('.btn').click(function(event){
  _this.sendData()
})

$('.btn').click(function(event){
  _this.sendData()
}.bind(this))

$('.btn').click((event) => {
  this.sendData()
})

// IMPLICIT RETURN when one line
$('.btn').click(event => this.sendData());

// WHEN more then one line use return

