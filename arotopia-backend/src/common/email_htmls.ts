const contact_us = (credentials: any) => {
  return `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
    <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Aerotopia Production</a>
    </div>
    <p style="font-size:1.1em">Hi, Yonatan Menkir</p>
    <h4>There is a new message arrived for you from the contact us page of Aerotopia website. The message is as follows: </h4>
    <p> ${credentials.message}</p>
   
    <h4> Contact Info of the message owner</h4>
  
    <p> Name: ${credentials.name}</p>
    <p> Email: ${credentials.email} </p>
  
    <p style="font-size:0.9em;">Regards,<br />Aerotopia</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
    <p>Aerotopia</p>
    <p>Addis Ababa</p>
    <p>Ethiopia</p>
    </div>
</div>
</div>`;
};


export default {
  contact_us: contact_us,
};
