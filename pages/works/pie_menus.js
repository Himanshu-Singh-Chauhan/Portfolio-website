import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";



const Work = () => {
    return (
        // i have disabled title in Layout itself, 
        // titles won't change.
        <Layout title="Pie Menus">
            <Container>
                <Title>
                    Pie Menus <Badge>Python, Qt</Badge>
                </Title>
                <P>
                    A crips description
                    asd;lfklj
                    asdlfkjasd
                    fasdkfjas
                    dfas;ldkf
                    asdlfklj
                </P>
                <List>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="talent">link to project <ExternalLinkIcon mx={2}/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span> Windows </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> Python QT </span>
                    </ListItem>
                </List>

                {/* <WorkImage src='/images/works/hmm.png' alt='Pie menus images should appear here'/>
                <WorkImage src='/images/works/hmm.png' alt='Pie menus images should appear here'/> */}
            </Container>
        </Layout>

    )
}


export default Work

