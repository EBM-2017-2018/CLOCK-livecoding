import agent from '../services/http';

const backUrl = '//oklm.ebm.nymous.io/api/session';

export async function reqCreateSession(userId) {
    console.log("Creating session");
    //const req = agent.post(backUrl).send({userId: userId});
    const req = localCreate();
    try {
        const {status, sessionId} = await req;
        console.log("Session created");
        console.log(sessionId);
        return { status: status, sessionId: sessionId };
    }
    catch(err) {
      console.error(err);
    }
};

export async function reqGetSession(sessionId, userId) {
    console.log("Getting session");
    //const req = agent.get(backUrl).query({sessionId: sessionId, userId: userId});
    const req = localGet(sessionId);
    try {
        const {status, sessionId} = await req;
        console.log("Session created");
        console.log(sessionId);
        return { status: status, sessionId: sessionId };
    }
    catch(err) {
      console.error(err);
    }
};

function localCreate(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({status: "ok", sessionId: "abc"});
        }, 3000);
    });
}

function localGet(sessionId){
    if(sessionId === "test"){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: "ok",
                    users: [
                        {
                            name: "Rémy",
                            id:"remy"
                        }
                    ],
                    htmlTxt: "<h1 class=title >Hello</h1>",
                    cssTxt: ".title{ background-color: blue; }",
                    jsTxt: "<script> </script>"
                });
            }, 3000);
        });
    } else {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: "not found",
                });
            }, 3000);
        });
    }
}