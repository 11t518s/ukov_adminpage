import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../fbase';
import { v4 as uuidv4 } from "uuid";



function Recruit({userObj}) {

    // 삭제할 때 어떤 것을 삭제할 지 확인하기 위해 기존 데이터를 불러옴
    const [recruit, setrecruit] = useState([])
    const getrecruit = async () =>{
        const dbrecruit = await dbService.collection("recruit").orderBy('createdAt').get();
        dbrecruit.forEach((document) => {
            const newrecruit = {
                ...document.data(),
                id: document.id
            };
            setrecruit((prev) => [newrecruit, ...prev]);
        });
    };
    useEffect(()=>{
        getrecruit();
    }, [])


    // 새로 추가할 스트링 state 선언
    const [newrecruitLink, setNewrecruitLink] = useState(null);
    const [newTitle, setNewTitle] = useState(null);
    const [newtext1, setNewtext1] = useState(null);
    const [newtext2, setNewtext2] = useState(null);
    const [newtext3, setNewtext3] = useState(null);
    const [newtext4, setNewtext4] = useState(null);
    const [newtext5, setNewtext5] = useState(null);
    const [newtext6, setNewtext6] = useState(null);
    const [newtext7, setNewtext7] = useState(null);
    const [newtext8, setNewtext8] = useState(null);



    // input태그에 입력 시 각 state에 정보 업로드
    const onLinkChange = (event) => {
        const {target:{value}} = event;
        setNewrecruitLink(value)
    }
    const onTitleChange = (event) => {
        const {target:{value}} = event;
        setNewTitle(value)
    }
    const ontext1Change = (event) => {
        const {target:{value}} = event;
        setNewtext1(value)
    }
    const ontext2Change = (event) => {
        const {target:{value}} = event;
        setNewtext2(value)
    }
    const ontext3Change = (event) => {
        const {target:{value}} = event;
        setNewtext3(value)
    }
    const ontext4Change = (event) => {
        const {target:{value}} = event;
        setNewtext4(value)
    }
    const ontext5Change = (event) => {
        const {target:{value}} = event;
        setNewtext5(value)
    }
    const ontext6Change = (event) => {
        const {target:{value}} = event;
        setNewtext6(value)
    }
    const ontext7Change = (event) => {
        const {target:{value}} = event;
        setNewtext7(value)
    }
    const ontext8Change = (event) => {
        const {target:{value}} = event;
        setNewtext8(value)
    }

        // 파일을 데이터 url로 받아서 화면상에 보여주기
        const [newFile, setNewFile] = useState(null)
        const fileChange = (event) => {
            const {
                target: {files}
            } = event;

            const theFile = files[0];
            const reader = new FileReader();
            reader.onloadend = (finishedEvent) => {
                setNewFile(finishedEvent.currentTarget.result)
            };
            if(theFile){
            reader.readAsDataURL(theFile);}
        };
    

    // submit 함수 
    const newSubmit = async (event) => {
        event.preventDefault();

        // 파일을 스토리지에 업로드하기
        if (newFile){
        const fireRef = storageService.ref().child(`recruit/${uuidv4()}`)
        const response = await fireRef.putString(newFile, "data_url")
        setNewFile(response.ref.getDownloadURL())
        }

        // 스트링 정보를 넣어주기
        await dbService.collection("recruit").add({
            title: newTitle,
            recruitLink: newrecruitLink,
            recruitURL: newFile,
            text1: newtext1,
            text2: newtext2,
            text3: newtext3,
            text4: newtext4,
            text5: newtext5,
            text6: newtext6,
            text7: newtext7,
            text8: newtext8,
            createdAt: Date.now(),
        })

        // 새로 업로드 후 input 태그 초기화
        setNewrecruitLink('')
        setNewTitle('')
        setNewtext1('')
        setNewtext2('')
        setNewtext3('')
        setNewtext4('')
        setNewtext5('')
        setNewtext6('')
        setNewtext7('')
        setNewtext8('')
        setNewFile()
        alert('홈페이지에서 확인해보세요 :)')
    }


    // 새로운 직무 생길 경우 칸 늘리기
    const [ACount, setACount] = useState(0)
    const ACounter = () => {
        if (ACount > 6){
        setACount(7)
    } else {
        setACount(ACount+1)}
    }
    const ACounterReversed = () => {
        if (ACount < 0){
            setACount(0)
        } else {
        setACount(ACount-1)
    }
    }

    
    console.log(newFile)
    return (
        <>

            <div className='title'>리크루팅 탭 선발부분이 수정되는 곳입니다!</div>
            <div className='subtitle'> 추가하기 </div>
            <div>
                <div className='editBox'>
                <form onSubmit={newSubmit} >
                이미지 파일을 추가하세요<input type='file' onChange={fileChange}/>
                {newFile === null
                ? <div></div> 
                : <img src={newFile} alt='file' width='300px' />}<br/>
                    <input  type='text' value={newrecruitLink} onChange={onLinkChange} placeholder='링크 주소를 입력하세요'/><br/>
                    <input  type='text' value={newTitle} onChange={onTitleChange} placeholder='회사 이름을 입력해주세요'/><br/>
                    <input  type='text' value={newtext1} onChange={ontext1Change} placeholder='직무를 입력해주세요'/><br/>

                    {ACount > 0 && <input  type='text' value={newtext2} onChange={ontext2Change} placeholder='직무를 입력해주세요'/>}
                    {ACount > 0 &&<br/>}

                    {ACount > 1 && <input  type='text' value={newtext3} onChange={ontext3Change} placeholder='직무를 입력해주세요'/>}
                    {ACount > 1 &&<br/>}

                    {ACount > 2 && <input  type='text' value={newtext4} onChange={ontext4Change} placeholder='직무를 입력해주세요'/>}
                    {ACount > 2 &&<br/>}

                    {ACount > 3 && <input  type='text' value={newtext5} onChange={ontext5Change} placeholder='직무를 입력해주세요'/>}
                    {ACount > 3 &&<br/>}

                    {ACount > 4 && <input  type='text' value={newtext6} onChange={ontext6Change} placeholder='직무를 입력해주세요'/>}
                    {ACount > 4 &&<br/>}

                    {ACount > 5 && <input  type='text' value={newtext7} onChange={ontext7Change} placeholder='직무를 입력해주세요'/>}
                    {ACount > 5 &&<br/>}

                    {ACount > 6 && <input  type='text' value={newtext8} onChange={ontext8Change} placeholder='직무를 입력해주세요'/>}
                    {ACount > 6 &&<br/>}




                    <input  type='submit' value="추가하기" className='button'/>
                </form>
                <br/><br/>

                <button onClick={ACounter}>한 줄 추가하기</button>
                <button onClick={ACounterReversed}>한 줄 없애기</button>
                </div>
                </div>

            <div className='subtitle'>삭제하기{recruit.id}</div>

        <div className='wrap'>
          {recruit.map((recruit)=>(
              <>
              <div className='recruitWidth'>
                <a href={recruit.recruitLink}>
                    <div><img width='300px' src={recruit.recruitURL} alt={recruit.title}/></div>
                    <h5>{recruit.title}</h5>
                    <p>{recruit.text1}</p>
                    <p>{recruit.text2}</p>
                    <p>{recruit.text3}</p>
                    <p>{recruit.text4}</p>
                    <p>{recruit.text5}</p>
                    <p>{recruit.text6}</p>
                    <p>{recruit.text7}</p>
                    <p>{recruit.text8}</p>

                </a>

                    <button className='button' onClick={()=>{
                        // 컨펌 후 firesore에서 데이터 삭제, storage에서 데이터 삭제
                        const del = window.confirm("지우시겠습니까?");
                            if (del) {
                        dbService.doc(`recruit/${recruit.id}`).delete()
                        storageService.refFromURL(recruit.recruitURL).delete()
                        alert('삭제를 완료했습니다. 새로고침 하시면 확인 가능합니다!')
                    }
                    }}>삭제하기</button>
                </div>
                </>
                ))}    
        </div> 
        </>
    )
}

export default Recruit;