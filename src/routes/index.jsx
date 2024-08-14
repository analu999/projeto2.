// src/routes/index.jsx 
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { CadastroPage } from "../pages/cadastro";
import { HomePage } from "../pages/dashboard/home";
import { LocationsPage } from "../pages/locations";
import { CreateOrEditLocationPage } from "../pages/locations/create-or-edit";
import { LocationDetailsPage } from "../pages/locations/location-details";
import { HomeWithoutMapPage } from "../pages/dashboard/home-without-map";
import { TemplatePrivateRoute } from "../templates/private-route";

export function AppRoutes() {
    return (
        <Routes>
            {/* MINHAS ROTAS PUBLICAS */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            {/* MINHAS ROTAS PRIVADAS */}
            <Route path="/dashboard" element={<TemplatePrivateRoute />}>
                <Route path="/dashboard" element={<HomePage />}/>
                <Route path="/dashboard/sem-mapa" element={<HomeWithoutMapPage />}/>
            </Route>
            {/* Rotas para Locais */}
            <Route path="/locais" element={<TemplatePrivateRoute />}>
                <Route path="/locais" element={<LocationsPage />} />
                <Route path="/locais/cadastrar" element={<CreateOrEditLocationPage />} />
                <Route path="/locais/:id" element={<LocationDetailsPage />} />
                <Route path="/locais/editar/:id" element={<CreateOrEditLocationPage />} />
            </Route>
            {/* Rotas para Cadastro de Locais de Atividades */}
            <Route path="/cadastrolocaisatividades" element={<TemplatePrivateRoute />}>
                <Route path="/cadastrolocaisatividades" element={<CreateOrEditLocationPage />} />
                <Route path="/cadastrolocaisatividades/:id" element={<CreateOrEditLocationPage />} />
            </Route>
        </Routes>
    )
}