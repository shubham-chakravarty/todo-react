import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

const TodoItem = ({ todo }) => {
    return (
        <Card sx={{
            maxWidth: 350,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <CardContent>
                <Typography variant="h5" color={"text.secondary"}>
                    {todo?.todo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{
                    backgroundColor: "black",
                    color: "white",
                    opacity: '0.9',
                    "&:hover": {
                        backgroundColor: "white",
                        color: "black",
                        opacity: '1'
                    }
                }}>
                    Details
                </Button>
            </CardActions>
        </Card>

    )
};

export default TodoItem;