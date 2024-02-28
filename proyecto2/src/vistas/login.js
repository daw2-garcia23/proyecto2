export const login = {
    template : `
    <div class="container">
    <div class="row justify-content-center mt-5"> 
        <div class="col-md-6">
            <div class="card shadow rounded"> 
                <div class="card-body">
                    <h2 class="mb-4 text-center">Login</h2> 
                    <form id="formLogin">
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                            <input type="email" class="form-control" id="emailLogin" placeholder="usuario@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="contraseña" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="passwordLogin" placeholder="Contraseña">
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-primary" id="btnEntrarLogin">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    `
}
