from django.urls import path

from experiences.views import Perks, PerkDetail

urlpatterns = [
    path("perks/", Perks.as_view()),
    path("perks/<int:pk>", PerkDetail.as_view()),
]
