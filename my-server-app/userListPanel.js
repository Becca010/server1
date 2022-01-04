import React from 'react';
import axios from 'axios';

function UserListPanel (){

    function fetchData(){
        axios
        .get("http://localhost:8080/listUsers")
        .then( function(response){

            var data = response.data;
            var text_Data = JSON.stringify(data);

            var user2 = data.user2;
            var text_user2 = JSON.stringify(user2);


            var phoneItems = user2.phoneItems;
            var text_phoneItems = JSON.stringify(phoneItems);
            
            // to show all data
            // window.alert(textData);

            // to show only for user2
            // window.alert(text_user2);


            // to show only phoneItems for user2
            window.alert(text_phoneItems);
          }
        );
    }


    function clickHandler(){
        fetchData();
    }


    return(
        <div>
            <button onClick={clickHandler} >Show message from Server</button>
        </div>
    );

}

export default UserListPanel;