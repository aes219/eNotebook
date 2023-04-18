const Login = () => {
    return(
        <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input type="text" placeholder="Username" class="input input-bordered" id="floatingInput" value="admin" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input type="text" placeholder="password" class="input input-bordered" id="floatingPassword"/>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-outline no-animation btn-warning" id="submit" type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login