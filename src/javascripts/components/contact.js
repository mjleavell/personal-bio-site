import $ from 'jquery';

const displayContact = () => {
  let domString = '';
  domString += `
  <div id="contact">
    <div class="container p-3">
        <h2 class="text-center my-2">Connect</h2>
        <div class="contact-img d-block text-center my-4 mt-2">
            <a class="m-3" href="https://www.linkedin.com/in/maggie-leavell" target="_blank"><img class="img-fluid rounded mb-3 mb-md-0" style="width: 64px; height:64px;" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png" alt=""></a>
            <a class="m-3" href="mailto:mjleavell@gmail.com?Subject=Contact" target="_blank"><img class="img-fluid rounded mb-3 mb-md-0" style="width: 64px; height:64px;" src="https://cdn3.iconfinder.com/data/icons/user-interface-web-1/550/web-circle-circular-round_67-512.png" alt=""></a>
            <a class="m-3" href="https://github.com/mjleavell" target="_blank"><img class="img-fluid rounded mb-3 mb-md-0" style="width: 64px; height:64px;" src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67" alt=""></a>
        </div>                
    </div>
  </div>`;
  $('#contact-page').html(domString);
};

export default displayContact;
