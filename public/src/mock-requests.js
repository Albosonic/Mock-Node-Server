(function init(){
  console.log('this is working?');
  return 1
}());

$.ajax({
  url: '/armons/endpoint',
  cache: false,
  success: function(response) {
    console.log('success:', response);
  }
});