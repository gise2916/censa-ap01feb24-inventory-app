import { Heading, FormInput } from "@/components/ui"
import { router } from "@inertiajs/react"

export default function LoginForm({ HeadingLevel = 1 }) {
    const Handlesubmit = (e) => {
        e.preventDefault()
        router.post("/auth/login")
    }
    return (
        <section>
            <Heading level={HeadingLevel}>Iniciar Sesión</Heading>
            <form method="POST" action="/auth/login">
                <FormInput
                    label="usuario:"
                    type="text"
                    placeholder="user123"
                    name="username"
                    autoFocus required />

                <FormInput
                    label="contraseña:"
                    type="password"
                    pwdIsVisibleContent={<i className="iconoir-eye"></i>}
                    pwdIsNotVisibleContent={<i className="iconoir-eye-closed"></i>}
                    name="userpwd"
                    required />
                <button type="submit" title="Click para iniciar sesión ">
                    Iniciar
                </button>
                <button type="reset" title="Clic para limpiar el formulario">
                    Limpiar
                </button>
            </form>
        </section >
    )
}