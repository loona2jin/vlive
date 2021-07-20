window.onload = function() {
    var idList = ['c9be75d0-9a25-11e8-9227-a0086f45fe1c','e645a450-0b7e-11ea-a87e-246e96398d40','70b62940-496d-11e9-99d3-a0086f9996be',
                 'b3f2d5a0-bd8b-11e8-a118-246e9648766c','e49f2280-1eaa-11eb-8fcf-a0086f45fe06','476f21f0-d952-11e6-9fae-000000007398',
                 '42698900-9b6b-11ea-9eaa-246e96487f70','76d03b80-8bf7-11e6-88df-000000002102','1fc49510-18cd-11e9-9777-246e96487868',
                 'c7fd2860-3b44-11e5-be21-000000001a8c','610b1690-de62-11eb-8ebb-246e9648766c','8a6685b0-a985-11e9-a5ee-a0086f45fe3a'];
    var colorList = ['#ff38e7','#ffeb3b','#4caf50','#ff9800','#ffd4fe','#f44336','#214ef3','#b30000','#ffb3b3','#03cab7','#717171','#ffb3b3'];
    var target = document.querySelector('div[class^=layout_content]'); // 2. 옵저버 인스턴스 생성 
    var observer = new MutationObserver(function(mutations) { 
        mutations.forEach(function(mutation) {
            if(mutation.target.className == 'u_cbox_list') {
                for(var i = 0; i < idList.length; i++) {
                    var userBox = document.getElementsByClassName('_user_id_no_' + idList[i]);
                    if(userBox.length) {
                        for(var j = 0; j < userBox.length; j++) {
                            userBox[j].querySelector(".u_cbox_area").style["backgroundColor"] = colorList[i];
                        }
                    }    
                }
                //console.log(mutation); 
            }
        }); 
    }); // 3. 옵션 설정 
    var config = { childList: true, subtree: true}; // 4. 실행 
    observer.observe(target, config);
};
