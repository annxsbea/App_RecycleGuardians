export type TLoginPayload = {
    email_user: string,
    senha_user: string,
  }
  
  export type TSignUpForm = {
    nome_user: string;
    email_user: string;
    senha_user: string;

  }

  export type SignInResponse = {
    nome_user: string;
      id_user: number;
      email_user: string;
      senha_user: string;
      pontos_user: number;
    };
  export type SignUpResponse = {
    nome_user: string;
    email_user: string;
    senha_user: string;
  };