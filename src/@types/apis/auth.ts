export type LoginPayload = {
  email_user: string,
  senha_user: string,
}

export type SignUpForm = {
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