import styles from "./index.module.css"
import { Head } from "@inertiajs/react"
import LoginForm from "@/components/auth/login-form"
export default function login() {
    return (
        <>
            <Head title="inicio de sesión" />
            <main className={styles.login}>
                <LoginForm />
            </main>
        </>
    )
}
