import firebase from "../firebaseConfig";
import {getDatabase,ref,set,push, onValue} from "firebase/database";
import { useEffect, useState } from "react";

export const addContent = (element)=>{
    const database = getDatabase(firebase);
    const contentRef = ref(database, "content/");
    const yeniContentRef = push(contentRef);

    set(yeniContentRef, {
        image:element.image,
        title:element.title,
        content:element.content
    })
}

export const useContent = ()=>{
    const [contentList, setContentList] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const database = getDatabase(firebase);
        const contentRef = ref(database, "content/");

        onValue(contentRef, (snapshot)=>{
            const data = snapshot.val();
            const contentArray = [];

            for(let id in data){
                contentArray.push({id, ...data[id]});
            }

            setContentList(contentArray);
            setIsLoading(false)

        })

    },[]);
    return {contentList, isLoading};
}

