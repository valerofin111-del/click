import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import styles from '../../styles/auth.module.scss'
import { motion } from "motion/react";
import { Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";

var formSchema = z.object({
    name: z.string().min(3).max(20),
    key: z.string().min(3).max(20)
})

type Form = z.infer<typeof formSchema>

var RegPage = function () {

  var { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      key: ''
    },
    mode: 'onBlur'
  })

  const sendForm = function(data: Form) {
    console.log(data) // query
  }

  return (
    <>
        <Flex justify={"center"}>
        <motion.div className={styles.AuthForm} initial={{ opacity: 0, transition: { duration: 0.1 } }} animate={{ opacity: 1 }} >

            <form onSubmit={handleSubmit(sendForm)}>
                <Flex justify={"center"} direction={"column"}>

                    <span className={styles.name}>
                    <motion.h1 whileHover={{ x: 20 }} >Name</motion.h1>
                    <motion.input {...register('name')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} /> <br />
                    </span>

                    <span className={styles.key} >
                    <motion.h1 whileHover={{ x: 20 }} >Key</motion.h1>
                    <motion.input {...register('key')} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} /> <br />
                    </span>

                    <motion.button 
                    type="submit" 
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    >
                    {isSubmitting ? '...' : 'Reg'}
                    </motion.button> 

                    <span className={styles.error} >
                    {Object.keys(errors).length > 0 && ('3-5 symbols in both inputs')} <br />
                    </span>

                </Flex>
            </form>    

        </motion.div>
        </Flex>
        
        <motion.span className={styles.Back} initial={{ y: 120 }} animate={{ y: 0 }} ><Link className={styles.Link} to='/'>Back</Link></motion.span>
    </>
  )
}

export default RegPage
