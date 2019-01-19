import { loader as s } from "../componentStyles";

const Loader = () => {
    console.log(`in loader`);
    return (
        <div style={s.container}>
            <div style={s.loader}>
                <div
                    style={{
                        ...s.dot,
                        animation: "loadingDot 1s 0s infinite"
                    }}
                />
                <div
                    style={{
                        ...s.dot,
                        animation: "loadingDot 1s 0.25s infinite"
                    }}
                />
                <div
                    style={{
                        ...s.dot,
                        animation: "loadingDot 1s 0.5s infinite"
                    }}
                />
            </div>
        </div>
    );
};

export default React.memo(Loader);
