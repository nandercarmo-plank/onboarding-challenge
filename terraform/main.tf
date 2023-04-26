terraform {
  required_providers {
    vercel = {
      source = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

resource "vercel_project" "vercel_deploy" {
  name      = "onboarding-challenge"
  framework = "nodejs"
  git_repository = {
    type = "github"
    repo = "nandercarmo-plank/onboarding-challenge"
  }
}