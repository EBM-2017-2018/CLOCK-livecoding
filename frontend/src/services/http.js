import agent from 'superagent';
import { checkAuthResponse, getAuthHeaders } from 'ebm-auth/dist/browser';

function localCreateSession(userid, sessionName){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                body: {
                    success: true,
                    result: {
                        creator: {
                            username: "remy",
                            role: "intervenant",
                            nom: "remy",
                            prenom: "remy",
                            email: "remy@remy.fr",
                        },
                        hash: "newSession",
                        created: Date.now(),
                        name: sessionName,
                        users: [
                            {
                                username: "remy",
                                role: "intervenant",
                                nom: "remy",
                                prenom: "remy",
                                email: "remy@remy.fr",
                            },
                        ],
                        code: {
                            html: "",
                            css: "",
                            js: "",
                        },
                    },
                },
            });
        }, 1000);
    });
}

function localGetSession(url){
    const [, , , sessionId, userId] = url.split("/");
    console.log(sessionId);
    if(sessionId === "test"){
        if (userId === "alex") {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        body: {
                            success: true,
                            result: {
                                hash: sessionId,
                                creator: {
                                    username: "remy",
                                    role: "intervenant",
                                    nom: "remy",
                                    prenom: "remy",
                                    email: "remy@remy.fr",
                                },
                                created: Date.now(),
                                name: "Frontend - Backend 2018",
                                users:[
                                    {
                                        username: "remy",
                                        role: "intervenant",
                                        nom: "remy",
                                        prenom: "remy",
                                        email: "remy@remy.fr",
                                    },
                                    {
                                        username: "alex",
                                        role: "eleve",
                                        nom: "martin",
                                        prenom: "alexandre",
                                        email: "alex@gmail.com",
                                    },
                                ],
                                code: {
                                    html: "<h1 class=title >Hello</h1>",
                                    css: ".title{ background-color: blue; }",
                                    js: "Some script"
                                },
                            },
                        },
                    });
                }, 1000);
            });
        } else if (userId === "remy") {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        body: {
                            success: true,
                            result: {
                                hash: sessionId,
                                creator: {
                                    username: "remy",
                                    role: "intervenant",
                                    nom: "remy",
                                    prenom: "remy",
                                    email: "remy@remy.fr",
                                },
                                created: Date.now(),
                                name: "Frontend - Backend 2018",
                                users:[
                                    {
                                        username: "remy",
                                        role: "intervenant",
                                        nom: "remy",
                                        prenom: "remy",
                                        email: "remy@remy.fr",
                                        },
                                    {
                                        username: "alex",
                                        role: "eleve",
                                        nom: "martin",
                                        prenom: "alexandre",
                                        email: "alex@gmail.com",
                                        },
                                ],
                                code: {
                                    html: "<h1 class=title >My owner is Remy</h1>",
                                    css: ".title{ background-color: remy's color; }",
                                    js: "Some script from Remy"
                                },
                            },
                        },
                    });
                }, 1000);
            });
        } else {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        body: {
                            success: false,
                            message: 'user not found in this session',
                        },
                    });
                }, 1000);
            });
        }
    } else {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    body: {
                        success: false,
                        message: 'Session does not exist',
                    },
                });
            }, 1000);
        });
    }
}

function localCheckUser(){
    var token = "test";//localStorage.getItem('token') || null;
    console.log("Token is: " + token);

    if(token === "test"){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    body: {
                        success: true,                        
                        user: {
                            username: "remy",
                            role: "intervenant",
                            nom: "remy",
                            prenom: "remy",
                            email: "remy@remy.fr",
                        },
                    },
                });
            }, 1000);
        });
    }
    else{
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    body: {
                        message: "not found",
                        success: false,
                    },
                });
            }, 1000);
        });
    }
}

const choiceAgent = {
    local: {
        get: (url) => {
            if (url.startsWith('/api/sessions')) {
                return localGetSession(url);
            }
            if (url === '/api/users') {
                return localCheckUser();
            }
        },
        post: (url) => {
            if (url.startsWith('/api/sessions')) {
                return {
                    send: (params) => {
                        return localCreateSession()
                    }
                }
            }
        }
    },
    online: {
        get: (url) => {
            console.log(getAuthHeaders());
            return agent.get(url).set(getAuthHeaders()).catch(checkAuthResponse);
        },
        post: (url) => {
            return {
                send: (params) => {
                    return agent.post(url).set(getAuthHeaders()).send(params).catch(checkAuthResponse);
                }
            }
        },
        update: (url) => {
            return {
                send: (params) => {
                    return agent.update(url).set(getAuthHeaders()).send(params).catch(checkAuthResponse);
                }
            }
        },
    }
}

export default choiceAgent;
