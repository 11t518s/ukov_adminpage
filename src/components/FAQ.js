import React, { useEffect, useState } from 'react';
import { dbService, storageService } from '../fbase';
import '../css/FAQ.css'


function FAQ({userObj}) {

    // 삭제할 때 어떤 것을 삭제할 지 확인하기 위해 기존 데이터를 불러옴
    const [FAQ, setFAQ] = useState([])
    const getFAQ = async () =>{
        const dbFAQ = await dbService.collection("FAQ").get();
        dbFAQ.forEach((document) => {
            const newFAQ = {
                ...document.data(),
                id: document.id
            };
            setFAQ((prev) => [newFAQ, ...prev]);
        });
    };
    useEffect(()=>{
        getFAQ();
    }, [])


    // 새로 추가할 스트링 state 선언
    const [newQ, setNewQ] = useState(null);
    const [newA, setNewA] = useState(null);
    const [newA2, setNewA2] = useState(null);
    const [newA3, setNewA3] = useState(null);
    const [newA4, setNewA4] = useState(null);
    const [newA5, setNewA5] = useState(null);
    const [newA6, setNewA6] = useState(null);
    const [newA7, setNewA7] = useState(null);
    const [newA8, setNewA8] = useState(null);


    // input태그에 입력 시 각 state에 정보 업로드
    const onQChange = (event) => {
        const {target:{value}} = event;
        setNewQ(value)
    }
    const onAChange = (event) => {
        const {target:{value}} = event;
        setNewA(value)
    }
    const onA2Change = (event) => {
        const {target:{value}} = event;
        setNewA2(value)
    }
    const onA3Change = (event) => {
        const {target:{value}} = event;
        setNewA3(value)
    }
    const onA4Change = (event) => {
        const {target:{value}} = event;
        setNewA4(value)
    }
    const onA5Change = (event) => {
        const {target:{value}} = event;
        setNewA5(value)
    }
    const onA6Change = (event) => {
        const {target:{value}} = event;
        setNewA6(value)
    }
    const onA7Change = (event) => {
        const {target:{value}} = event;
        setNewA7(value)
    }
    const onA8Change = (event) => {
        const {target:{value}} = event;
        setNewA8(value)
    }


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

    // submit 함수 
    const newSubmit = async (event) => {
        event.preventDefault()

        // 스트링 정보를 넣어주기
        await dbService.collection("FAQ").add({
            Q: newQ,
            A: newA,
            A2: newA2,
            A3: newA3,
            A4: newA4,
            A5: newA5,
            A6: newA6,
            A7: newA7,
            A8: newA8,
            createdAt: Date.now(),
        })

        // 새로 업로드 후 input 태그 초기화
        setNewQ('')
        setNewA('')
        alert('새로고침 하신 후 확인해보세요 :)')
    }

    
    // 파일을 데이터 url로 받아서 화면상에 보여주기
    return (
        <>
        <div className='newFAQ'>
            <div className='title'>리크루트 탭의 FAQ가 수정되는 곳입니다!</div>
            <div className='subtitle'> 추가하기 </div>
            <p>데이터 베이스에 줄바꿈이 인식이 안돼서 줄바꿈 하실 경우 아래 줄에다가 입력해주시면 됩니다!<br/>
                줄바꿈 필요 없으시면 필요하신 곳 까지 적고 제출 하시면 됩니다 :)<br/><br/><br/>
            </p>
            <div className='editBox'>                
            <form onSubmit={newSubmit} >
                    <input className='input' type='text' value={newQ} onChange={onQChange} placeholder='Q를 입력하세요'/><br/>
                    <input className='input' type='text' value={newA} onChange={onAChange} placeholder='A를 입력해주세요'/><br/>
                    {ACount > 0 && <input className='input' type='text' value={newA2} onChange={onA2Change} placeholder='A를 입력해주세요'/>}
                    {ACount > 0 &&<br/>}

                    {ACount > 1 && <input className='input' type='text' value={newA3} onChange={onA3Change} placeholder='A를 입력해주세요'/>}
                    {ACount > 1 &&<br/>}

                    {ACount > 2 && <input className='input' type='text' value={newA4} onChange={onA4Change} placeholder='A를 입력해주세요'/>}
                    {ACount > 2 &&<br/>}

                    {ACount > 3 && <input className='input' type='text' value={newA5} onChange={onA5Change} placeholder='A를 입력해주세요'/>}
                    {ACount > 3 &&<br/>}

                    {ACount > 4 && <input className='input' type='text' value={newA6} onChange={onA6Change} placeholder='A를 입력해주세요'/>}
                    {ACount > 4 &&<br/>}

                    {ACount > 5 && <input className='input' type='text' value={newA7} onChange={onA7Change} placeholder='A를 입력해주세요'/>}
                    {ACount > 5 &&<br/>}

                    {ACount > 6 && <input className='input' type='text' value={newA8} onChange={onA8Change} placeholder='A를 입력해주세요'/>}
                    {ACount > 6 &&<br/>}

                    <input  type='submit' value="추가하기" className='button'/>
                </form>
                <br/><br/><br/>
                <button onClick={ACounter}>한 줄 추가하기</button>
                <button onClick={ACounterReversed}>한 줄 없애기</button>
            </div>
            </div>


            <div className='subtitle'>삭제하기{FAQ.id}</div>
            <div className='FAQbox'>

            {FAQ.map((FAQ)=>(
                <>
                    <div className='FAQ editBox'>
                    <div key={FAQ.id}>
                          <h1>{FAQ.Q}</h1>
                          <p>{FAQ.A}</p>
                          <p>{FAQ.A2}</p>
                          <p>{FAQ.A3}</p>
                          <p>{FAQ.A4}</p>
                          <p>{FAQ.A5}</p>
                          <p>{FAQ.A6}</p>
                          <p>{FAQ.A7}</p>
                          <p>{FAQ.A8}</p>
                    </div>  
                    <button onClick={()=>{
                        // 컨펌 후 firesore에서 데이터 삭제, storage에서 데이터 삭제
                        const del = window.confirm("지우시겠습니까?");
                            if (del) {
                        dbService.doc(`FAQ/${FAQ.id}`).delete()
                        storageService.refFromURL(FAQ.FAQURL).delete()
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

export default FAQ;