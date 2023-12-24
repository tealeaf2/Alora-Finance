import Header from '../global/Header';
import '../styles/index.css';


export default function Lessons() {
    return (
        <>
            <Header/>
            {/* <div className="sm:mx-8 lg:mx-16 xl:mx-24 bg-background"> */}
            <div class="flex flex-row outline-red-700 !bg-blue-900">
                {/* <p>12312</p>
                <p>3333</p>
                <div>HELLO</div>
                <div>GO</div>
                <div>WORK</div> */}
                <div className="basis-1/4 outline-cyan-500">01</div>
                <div className="basis-1/4 text-red-600">02</div>
                <div className="basis-1/2 App-link">03</div>
            </div>

            {/* </div> */}

            

        </>
    )
}

