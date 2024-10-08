import Link from "next/link";
import { Container, Image } from "react-bootstrap";
export default function LoginPage() {
  return (
    <Container
      fluid
      className="p-0 bg-light vh-100 d-flex justify-content-center"
    >
      <main className="form-signin p-3 col-md-6 col-xs-10 col-12">
        <form>
          <div className="text-center">
            <Image
              className="mb-4"
              src="/logo.png"
              alt=""
              width="70"
              height="70"
            />
          </div>
          <h1 className="h3 mb-3 fw-normal">로그인</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label>이메일</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="비밀번호"
            />
            <label>비밀번호</label>
          </div>

          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> 아이디 기억하기
            </label>
          </div>
          <div className="hstack gap-3 justify-content-center">
            <Image
              className="mb-4 "
              src="/kakaotalk_sharing_btn_medium_ov.png"
              alt=""
              width="50"
              height="50"
              style={{
                borderRadius: "5px",
                cursor: "pointer",
                border: "1px solid black",
              }}
            />
            <Image
              className="mb-4"
              src="/web_light_sq_na@2x.png"
              alt=""
              width="50"
              height="50"
              style={{ cursor: "pointer" }}
            />
          </div>
          <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">
            Sign in
          </button>
          <div className="mb-3 text-center">
            <label>
              아이디가 없으신가요? <Link href="/signup">회원가입</Link>
            </label>
          </div>
        </form>
      </main>
    </Container>
  );
}
