import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import styles from '../../styles/auth.module.scss'
import { motion } from "motion/react";
import { Flex } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import Card from "../library/Card/Card";
import PickText from "../library/PickText/PickText";
import themeAtom from "../../atoms/themeAtom";
import { useAtomValue } from "jotai";

var formSchema = z.object({
    name: z.string().min(3).max(20),
    key: z.string().min(3).max(20)
})

type Form = z.infer<typeof formSchema>

var RegPage = function () {

  var theme = useAtomValue(themeAtom)

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
        <Card className={theme} >

            <form onSubmit={handleSubmit(sendForm)}>
                <Flex justify={"center"} direction={"column"}>

                    <motion.span whileHover={{ scale: 1.05 }} className={styles.name}>
                      <PickText className={theme} >Name</PickText>
                      <Flex justify={'center'}>
                        <motion.input {...register('name')} whileHover={{ scale: 1.05, borderColor: 'hsl(0, 0%, 5%)' }} whileTap={{ scale: 0.95 }} /> <br />
                      </Flex>
                    </motion.span>

                    <motion.span whileHover={{ scale: 1.05 }} className={styles.key} >
                      <PickText className={theme} >Key</PickText>
                      <Flex justify={'center'}>
                        <motion.input {...register('key')} whileHover={{ scale: 1.05, borderColor: 'hsl(0, 0%, 5%)' }} whileTap={{ scale: 0.95 }} /> <br />
                      </Flex>
                    </motion.span>

                    <motion.button className={styles.AuthButton}
                      type="submit" 
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.8, backgroundColor: 'hsl(0, 76%, 52%)' }}
                      whileHover={{ scale: 1.1, color: 'hsl(0, 0%, 5%)' }}
                    >
                    {isSubmitting ? '...' : 'Reg'}
                    </motion.button> 

                    <span className={styles.Error} >
                      {Object.keys(errors).length > 0 && ('3-5 symbols in both inputs')} <br />
                    </span>

                </Flex>
            </form>    

        </Card>
      </Flex>
        
      <motion.span className={styles.Back} initial={{ y: 120 }} animate={{ y: 0 }} ><Link className={styles.Link} to='/'>Back</Link></motion.span>
    </>
  )
}

export default RegPage
