using CampaingModel;
using DataAccess.Data;
using DataAccess.DataAccess;

using MinimalAPI;
//using PromoIt.Saga; // Added namespace for SAGA

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<ISqlDataAccess, SqlDataAccess>();
builder.Services.AddSingleton<ICampaignData, CampaignData>();
builder.Services.AddSingleton<ITwitterData, TwitterData>();
builder.Services.AddSingleton<IUserData, UserData>();
builder.Services.AddSingleton<IDonationData, DonationData>();
//builder.Services.AddSingleton<IExternalTaskClient, ExternalTaskClient>(); // Added external task client for SAGA

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseCors();

app.ConfigureApi();

//app.UseExternalTasks(); // Added use of external tasks for SAGA

app.Run();
